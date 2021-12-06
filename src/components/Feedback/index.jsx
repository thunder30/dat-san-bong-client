import React from 'react'
import { Rate, Avatar, Comment } from 'antd'

const actions = [<Rate disabled defaultValue={4} style={{ fontSize: 16 }} />]

const getTimeToString = () => {
    const _date = new Date()
    const [hour, minute, date, month, year] = [
        _date.getHours(),
        _date.getMinutes(),
        _date.getDate(),
        _date.getMonth() + 1,
        _date.getFullYear(),
    ]
    return `${hour}:${minute} ${date}/${month}/${year}`
}

function Feedback({ author = 'Thunder' }) {
    return (
        <Comment
            actions={actions}
            author={author}
            datetime={<span>{getTimeToString()}</span>}
            avatar={
                <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, quibusdam quod. Aspernatur distinctio a velit ratione
                    nesciunt aut eum officiis?
                </p>
            }
        />
    )
}

export default Feedback
