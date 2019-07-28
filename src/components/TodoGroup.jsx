import React, {useState} from 'react';

const TodoGroup = (props) => {
    const {data, index} = props;
    const dataset = data[index];
    
    // 자체적인 state를 가짐. 갱신되어야기 때문에
    //const {list} = dataset; // 이렇게 넣으면 list 수정이 불가능하다. 그래서 밑에꺼로 수정
    const [list, setList] = useState(dataset.list);

    const [text, setText] = useState('');

    const TodoList = list.map((item, index) => {
        const {description, checked} = item;

        // onChange 필요하지만 추후 추가
        return (
            <div key={index}>
                <input type="checkbox" checked={checked}/>
                {description}
            </div>
        )
    });

    // input에서 텍스트 치는 것을 받음
    // ref로 접근해도 됨
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        // 기존 배열에 item을 추가
        setList([
            ...list,
            {
                "description" : text,
                "checked" : false
            }
        ]);
        setText('');
        e.preventDefault(); // 폼의 데이터가 서버로 가는 기본 동작을 막음
    }

    return (
        <div className="TodoList">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={text} placeholder="add todo"/>
                <button>추가</button>
            </form>
            {TodoList}
        </div>
    )

    // 어떤 그룹의 데이터를 노출시킬것인가에 대한 결정
    // 보통 api에는 각 그룹의 id가 있는데 여긴 없으니까 index로 처리
}

export default TodoGroup;