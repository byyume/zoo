'use client';

import { useState, useCallback, useEffect } from 'react';
import { supabase, type RestaurantRow } from '@/lib/supabase';

const CATEGORIES = ['전체', '점심 식사', '디저트', '회식'] as const;
type Category = typeof CATEGORIES[number];

function TitleBarButtons() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button className="win98-titlebar-btn" aria-label="최소화">_</button>
      <button className="win98-titlebar-btn" aria-label="최대화">□</button>
      <button className="win98-titlebar-btn" style={{ fontWeight: 'bold', marginLeft: 2 }} aria-label="닫기">✕</button>
    </div>
  );
}

function RestaurantCard({ r }: { r: RestaurantRow }) {
  const categoryColor: Record<string, string> = {
    '점심 식사': '#000080',
    '디저트': '#800080',
    '회식': '#804000',
    '기타': '#404040',
  };

  return (
    <div className="win98-inset" style={{ minHeight: 200 }}>
      <div style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000080',
        borderBottom: '2px solid #c0c0c0',
        paddingBottom: 4,
      }}>
        🍽️ {r.name}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '4px 8px', fontSize: 11 }}>
        <span style={{ color: '#808080', fontWeight: 'bold' }}>분류</span>
        <span>
          <span style={{
            backgroundColor: categoryColor[r.category] || '#000080',
            color: 'white',
            padding: '1px 6px',
            fontSize: 10,
          }}>
            {r.category}
          </span>
        </span>

        <span style={{ color: '#808080', fontWeight: 'bold' }}>장르</span>
        <span style={{ fontWeight: 'bold' }}>{r.genre || '-'}</span>

        {r.location && (
          <>
            <span style={{ color: '#808080', fontWeight: 'bold' }}>위치</span>
            <span>📍 {r.location}</span>
          </>
        )}

        <span style={{ color: '#808080', fontWeight: 'bold' }}>추천인</span>
        <span>👤 {r.recommender || '-'}</span>

        <span style={{ color: '#808080', fontWeight: 'bold' }}>검증</span>
        <span>
          {r.verified ? (
            <span className="badge-verified">✓ 검증됨</span>
          ) : (
            <span className="badge-unverified">미검증</span>
          )}
          {r.verified_by && (
            <span style={{ marginLeft: 6, color: '#404040', fontSize: 10 }}>
              by {r.verified_by}
            </span>
          )}
        </span>

        {r.notes && (
          <>
            <span style={{ color: '#808080', fontWeight: 'bold' }}>비고</span>
            <span style={{ color: '#404040' }}>💡 {r.notes}</span>
          </>
        )}

        {r.payco && (
          <>
            <span style={{ color: '#808080', fontWeight: 'bold' }}>페이코</span>
            <span>
              {r.payco === 'O' ? (
                <span className="badge-payco">PAYCO 가능</span>
              ) : (
                <span style={{ color: '#808080' }}>불가</span>
              )}
            </span>
          </>
        )}
      </div>

      {r.review && (
        <div style={{ marginTop: 10 }}>
          <div className="win98-separator" />
          <div style={{ fontSize: 11, color: '#000080', fontWeight: 'bold', marginBottom: 3 }}>
            💬 리뷰
          </div>
          <div style={{
            backgroundColor: '#fffff0',
            border: '1px solid #c0c0c0',
            padding: '6px 8px',
            fontSize: 11,
            color: '#000',
            fontStyle: 'italic',
            lineHeight: 1.6,
            userSelect: 'text',
          }}>
            &ldquo;{r.review}&rdquo;
          </div>
        </div>
      )}

      {r.link && (
        <div style={{ marginTop: 8 }}>
          <a
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="win98-btn"
            style={{ fontSize: 10, minWidth: 0, padding: '2px 8px', textDecoration: 'none', display: 'inline-block' }}
          >
            🔗 네이버 지도 보기
          </a>
        </div>
      )}
    </div>
  );
}

function RestaurantListItem({
  r, selected, onClick,
}: {
  r: RestaurantRow;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '2px 6px',
        cursor: 'pointer',
        backgroundColor: selected ? '#000080' : 'transparent',
        color: selected ? '#ffffff' : '#000000',
        fontSize: 11,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <span style={{ fontSize: 10, color: selected ? '#aaaaff' : '#808080', minWidth: 60 }}>
        {r.genre?.split(',')[0]?.trim() || '기타'}
      </span>
      <span>{r.name}</span>
      {r.verified && (
        <span style={{ fontSize: 9, color: selected ? '#aaffaa' : '#008000' }}>✓</span>
      )}
    </div>
  );
}

export default function Home() {
  const [allRestaurants, setAllRestaurants] = useState<RestaurantRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
  const [currentRestaurant, setCurrentRestaurant] = useState<RestaurantRow | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState<RestaurantRow[]>([]);
  const [showList, setShowList] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState<RestaurantRow | null>(null);
  const [rollCount, setRollCount] = useState(0);

  // Supabase에서 데이터 로드
  useEffect(() => {
    async function fetchRestaurants() {
      setLoading(true);
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .in('category', ['점심 식사', '디저트', '회식'])
        .order('id', { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setAllRestaurants(data ?? []);
      }
      setLoading(false);
    }
    fetchRestaurants();
  }, []);

  const filteredRestaurants = selectedCategory === '전체'
    ? allRestaurants
    : allRestaurants.filter(r => r.category === selectedCategory);

  const handleRandom = useCallback(() => {
    if (isRolling || filteredRestaurants.length === 0) return;
    setIsRolling(true);
    setRollCount(0);

    let count = 0;
    const maxRolls = 12;
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * filteredRestaurants.length);
      setCurrentRestaurant(filteredRestaurants[idx]);
      count++;
      setRollCount(count);
      if (count >= maxRolls) {
        clearInterval(interval);
        const final = filteredRestaurants[Math.floor(Math.random() * filteredRestaurants.length)];
        setCurrentRestaurant(final);
        setHistory(prev => [final, ...prev].slice(0, 5));
        setIsRolling(false);
      }
    }, 80);
  }, [isRolling, filteredRestaurants]);

  const now = new Date();
  const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#008080',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '20px 8px 60px',
      backgroundImage: `repeating-linear-gradient(
        45deg, transparent, transparent 2px,
        rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
      )`,
    }}>

      {/* Main Window */}
      <div className="win98-window" style={{ width: '100%', maxWidth: 520 }}>

        {/* Title Bar */}
        <div className="win98-titlebar">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 4, fontSize: 12 }}>🍴</span>
            <span>판교 맛집 랜덤 추천기 v1.0</span>
          </div>
          <TitleBarButtons />
        </div>

        {/* Menu Bar */}
        <div style={{
          backgroundColor: '#c0c0c0',
          padding: '2px 4px',
          fontSize: 11,
          borderBottom: '1px solid #808080',
          display: 'flex',
          gap: 2,
        }}>
          {['파일(F)', '편집(E)'].map(m => (
            <button key={m} className="win98-btn" style={{ minWidth: 0, padding: '1px 8px', fontSize: 11 }}>
              {m}
            </button>
          ))}
          <button
            className="win98-btn"
            style={{ minWidth: 0, padding: '1px 8px', fontSize: 11 }}
            onClick={() => setShowList(!showList)}
          >
            {showList ? '▲ 목록숨기기(L)' : '▼ 목록보기(L)'}
          </button>
          <button className="win98-btn" style={{ minWidth: 0, padding: '1px 8px', fontSize: 11 }}>
            도움말(H)
          </button>
        </div>

        {/* Content */}
        <div className="win98-panel" style={{ padding: 12 }}>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: 2, marginBottom: 0 }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`win98-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => { setSelectedCategory(cat); setCurrentRestaurant(null); }}
              >
                {cat === '전체' ? '🔍 전체'
                  : cat === '점심 식사' ? '🍱 점심'
                  : cat === '디저트' ? '☕ 디저트'
                  : '🍻 회식'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ border: '2px solid #808080', backgroundColor: '#c0c0c0', padding: 12 }}>

            {/* Loading / Error */}
            {loading ? (
              <div className="win98-inset" style={{
                minHeight: 120, display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column', gap: 8, color: '#808080',
              }}>
                <div className="win98-progress-bar" style={{ width: '80%' }}>
                  <div className="win98-progress-fill" style={{ width: '60%' }} />
                </div>
                <div style={{ fontSize: 11 }}>🔄 Supabase에서 데이터 로딩 중...</div>
              </div>
            ) : error ? (
              <div className="win98-inset" style={{
                minHeight: 80, display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#cc0000', fontSize: 11,
              }}>
                ⚠️ 오류: {error}
              </div>
            ) : (
              <>
                {/* Count */}
                <div style={{ marginBottom: 10, fontSize: 11, color: '#000080', fontWeight: 'bold' }}>
                  📊 총 {filteredRestaurants.length}개의 맛집
                  <span style={{ color: '#008000', marginLeft: 8, fontWeight: 'normal' }}>
                    (검증됨: {filteredRestaurants.filter(r => r.verified).length}개)
                  </span>
                </div>

                {/* Result */}
                <div style={{ marginBottom: 10 }}>
                  {currentRestaurant ? (
                    <RestaurantCard r={currentRestaurant} />
                  ) : (
                    <div className="win98-inset" style={{
                      minHeight: 120, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexDirection: 'column', gap: 8, color: '#808080',
                    }}>
                      <div style={{ fontSize: 32 }}>🎰</div>
                      <div style={{ fontSize: 12 }}>아래 버튼을 눌러 랜덤 맛집을 추천받으세요!</div>
                      <div style={{ fontSize: 10, color: '#a0a0a0' }}>
                        판교 직장인들이 직접 추천한 맛집 {allRestaurants.length}개
                      </div>
                    </div>
                  )}
                </div>

                {/* Progress bar */}
                {isRolling && (
                  <div style={{ marginBottom: 8 }}>
                    <div className="win98-progress-bar">
                      <div className="win98-progress-fill" style={{ width: `${(rollCount / 12) * 100}%` }} />
                    </div>
                    <div style={{ fontSize: 10, color: '#000080', marginTop: 2 }}>
                      맛집 검색 중... {rollCount}/12
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                  <button
                    className="win98-btn-large"
                    onClick={handleRandom}
                    disabled={isRolling || loading}
                    style={{ opacity: isRolling ? 0.7 : 1, minWidth: 200 }}
                  >
                    {isRolling
                      ? <span><span className="spinning">🎰</span> 추천 중...</span>
                      : '🎲 랜덤 맛집 추천!'}
                  </button>
                  {currentRestaurant && (
                    <button className="win98-btn" onClick={() => setCurrentRestaurant(null)}>
                      초기화
                    </button>
                  )}
                </div>

                {/* History */}
                {history.length > 0 && (
                  <div style={{ marginTop: 8 }}>
                    <div className="win98-separator" />
                    <div style={{ fontSize: 10, color: '#808080', marginBottom: 4 }}>최근 추천 이력:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {history.map((r, i) => (
                        <button
                          key={`${r.id}-${i}`}
                          className="win98-btn"
                          style={{ fontSize: 10, minWidth: 0, padding: '1px 6px' }}
                          onClick={() => setCurrentRestaurant(r)}
                        >
                          {r.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Status Bar */}
        <div className="win98-statusbar">
          <div className="win98-statusbar-panel" style={{ flex: 2 }}>
            {loading ? '데이터 로딩 중...' : currentRestaurant ? `선택됨: ${currentRestaurant.name}` : 'Supabase 연결됨'}
          </div>
          <div className="win98-statusbar-panel">
            {loading ? '...' : `${filteredRestaurants.length}개`}
          </div>
          <div className="win98-statusbar-panel" style={{ flex: 'none', minWidth: 50 }}>
            {timeStr}
          </div>
        </div>
      </div>

      {/* List Window */}
      {showList && !loading && (
        <div className="win98-window" style={{ width: '100%', maxWidth: 520, marginTop: 16 }}>
          <div className="win98-titlebar">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: 4 }}>📋</span>
              <span>맛집 전체 목록</span>
            </div>
            <TitleBarButtons />
          </div>
          <div className="win98-panel" style={{ padding: 8 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 11 }}>분류:</span>
              <select
                className="win98-select"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value as Category)}
              >
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <span style={{ fontSize: 10, color: '#808080' }}>{filteredRestaurants.length}개</span>
            </div>
            <div className="win98-inset" style={{ maxHeight: 280, overflowY: 'auto', padding: 2 }}>
              {filteredRestaurants.map(r => (
                <RestaurantListItem
                  key={r.id}
                  r={r}
                  selected={selectedListItem?.id === r.id}
                  onClick={() => { setSelectedListItem(r); setCurrentRestaurant(r); }}
                />
              ))}
            </div>
            {selectedListItem && (
              <div style={{ marginTop: 8, fontSize: 10, color: '#000080' }}>
                선택: {selectedListItem.name} ({selectedListItem.genre})
              </div>
            )}
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <div className="win98-taskbar">
          <button className="win98-btn" style={{ fontWeight: 'bold', fontSize: 11, padding: '2px 10px' }}>
            🪟 시작
          </button>
          <div style={{ width: 1, height: 20, backgroundColor: '#808080', margin: '0 4px' }} />
          <button className="win98-btn" style={{ fontSize: 10, padding: '2px 8px', backgroundColor: '#a0a0a0' }}>
            🍴 판교 맛집 추천기
          </button>
          <div style={{ flex: 1 }} />
          <div style={{
            backgroundColor: '#c0c0c0',
            border: '2px inset #808080',
            padding: '2px 8px',
            fontSize: 11,
            fontWeight: 'bold',
          }}>
            {timeStr}
          </div>
        </div>
      </div>
    </div>
  );
}
