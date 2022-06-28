export async function getExports(name: string) {
    const pkg = await import(name)
    return Object.keys(pkg)
}