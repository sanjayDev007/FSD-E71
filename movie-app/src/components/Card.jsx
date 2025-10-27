import React from "react";

const placeholder =
    "https://via.placeholder.com/300x450.png?text=No+Poster+Available";

function Card(props) {
    const data = props.movie || props; // accept either <Card movie={movie} /> or <Card Title=... />
    const { Title, Year, imdbID, Type, Poster } = data || {};

    const styles = {
        card: {
            width: 260,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(16,24,40,0.12)",
            background: "#fff",
            transition: "transform 180ms ease, box-shadow 180ms ease",
            cursor: "pointer",
            fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        },
        imgWrap: {
            height: 380,
            overflow: "hidden",
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
        },
        body: {
            padding: 14,
        },
        title: {
            fontSize: 16,
            fontWeight: 700,
            margin: "0 0 6px 0",
            color: "#0f172a",
            lineHeight: 1.2,
        },
        meta: {
            fontSize: 13,
            color: "#64748b",
            marginBottom: 10,
        },
        link: {
            display: "inline-block",
            fontSize: 13,
            color: "#0369a1",
            textDecoration: "none",
            marginTop: 6,
        },
    };

    return (
        <div
            style={styles.card}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(16,24,40,0.16)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(16,24,40,0.12)";
            }}
            aria-label={Title}
        >
            <div style={styles.imgWrap}>
                <img
                    src={Poster && Poster !== "N/A" ? Poster : placeholder}
                    alt={Title || "Poster"}
                    style={styles.img}
                />
            </div>
            <div style={styles.body}>
                <h3 style={styles.title}>{Title || "Unknown title"}</h3>
                <div style={styles.meta}>
                    {Year || "—"} {Year && Type ? "•" : ""} {Type || ""}
                </div>
                {imdbID ? (
                    <a
                        style={styles.link}
                        href={`https://www.imdb.com/title/${imdbID}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on IMDb
                    </a>
                ) : null}
            </div>
        </div>
    );
}

export default Card;