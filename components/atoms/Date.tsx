import { parseISO, format } from 'date-fns'
import React from 'react'

type Props = {
    dateString: Date;
}

const Date = ({ dateString }: any) => {
    const date = parseISO(dateString)
    return (
        <div>
            <time dateTime={dateString}>{format(parseISO(dateString), 'yyyy.MM.dd hh:mm',)}</time>
        </div>
    );
}

export default Date;