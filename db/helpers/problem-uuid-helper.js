const uuidv4 = async () => {
    const { v4: uuidv4 } = await import('uuid')

    return uuidv4()
}

const problem_ids = {
    add_1: uuidv4(),
    add_2: uuidv4(),
    add_3: uuidv4(),
}

module.exports = problem_ids
