function normalizeBasePath(value: string | undefined) {
    if (!value || value === "/") {
        return "/";
    }

    let normalized = value.startsWith("/") ? value : `/${value}`;

    return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function getBasePath() {
    return normalizeBasePath(process.env.BASE_PATH);
}

export function getBasename() {
    let basePath = getBasePath();

    return basePath === "/" ? "/" : basePath.slice(0, -1);
}