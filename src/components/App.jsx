import React, {useState} from 'react';
import TodoMenu from './TodoMenu';
import TodoGroup from './TodoGroup';

// MockAPI, MockJSON -> api가 없을때 클라이언트에서 제어할 수 있도록 
// 여기서는 그룹 전체를 받아올 수 있도록 
// rest api / graphql 요즘 많이 사용함
// data를 app.jsx에 넣고 관리하면 데이터가 바뀌면 컴포넌트 전체가 렌더링된다. 성능상 좋지 않지만 일단 돌아가기는 함
// 여기서 state는 안쓰고 데이터를 각각 컴포넌트에 props로 보낸다
// 데이터 없이 짜보기! 그게 더 쉬울것
const DATA = {
    result: {
        groups : [
            {
                "name" : "2018년 목표",
                "list" : [
                    {
                        "description" : "직장구하기",
                        "checked" : false
                    },
                    {
                        "description" : "직장구하기2",
                        "checked" : false
                    },
                    {
                        "description" : "직장구하기3",
                        "checked" : false
                    }
                ]
            },
            {
                "name" : "가족",
                "list" : [
                    {
                        "description" : "집사기",
                        "checked" : false
                    },
                    {
                        "description" : "집사기2",
                        "checked" : false
                    },
                    {
                        "description" : "집사기3",
                        "checked" : false
                    }
                ]
            }
        ]
    }
}

const App = () => {
    // const {data, setData} = useState(DATA);
    const dataGroups = DATA.result.groups;
    const [index, setIndex] = useState(0);

    // TodoMenu에서만 index를 변경할 수 있으니까 setIndex 가짐
    return (
        <div className="app">
            <div className="todo-group-list">
                <TodoMenu data={dataGroups} index={index} setIndex={setIndex}/>
            </div>
            <div className="todo-wrapper">
                <TodoGroup data={dataGroups} index={index}/>
            </div>
        </div>
    )
}

export default App;