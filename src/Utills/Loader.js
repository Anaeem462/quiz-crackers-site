export const loaderData = async ({params}) => {
    const quizesData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const quizes = await quizesData.json()

    const dataQuizes = quizes.data
    

    return {dataQuizes}

}
