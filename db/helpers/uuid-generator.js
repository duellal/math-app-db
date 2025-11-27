const gen_uuid = async () => {
    const { v4: uuidv4 } = await import('uuid')

    return uuidv4()
}

module.exports = gen_uuid
