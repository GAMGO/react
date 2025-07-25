import React from 'react'
//{children}은 리액트에서 자식 컴포넌트를 전달할 때 사용하는 미리 정해진 props이다. 받을 때만 사용.
export default function TodoTemplate({ children }) {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            
            <div className="content">
                {children}
            </div>
        </div>
    )
}
