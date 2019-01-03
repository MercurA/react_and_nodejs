### Resources

    POST http://localhost:3000/admin/addBooks

## Description

It has to send an object containing the following:

    {
        book: {
            ISBN: string,
            Title: string,
            Author: string,
            Description: string,
            NrOfCopies: number,
            NrOfCopiesAvailable: number,
            Publisher: string,
        }
    }

## On Success

    {
        success: boolean,
        data: Object | Array,
    }

## On Failure

    {
        success: boolean,
        message: string
    }