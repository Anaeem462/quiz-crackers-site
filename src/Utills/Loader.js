export const loaderData = async (id) => {
    const quizesData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const quizes = await quizesData.json()

    const quizeData = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    const quize = await quizeData.json()

    const question = quize.data.questions
    
 
    const dataQuizes = quizes.data
    
   

 

    return {dataQuizes,question}

}
