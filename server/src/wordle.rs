use actix_web::{get, post, HttpResponse, Responder};

// Wordle logic
static THREE_WORDLIST_PATH: &str = "./server/src/words/three.csv";
static FOUR_WORDLIST_PATH: &str = "./server/src/words/four.csv";
static FIVE_WORDLIST_PATH: &str = "./server/src/words/five.csv";

#[get("/wordle")]
async fn get_wordle(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

#[post("/wordle")]
async fn post_wordle(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

#[get("/wordle/three")]
async fn get_wordle_three() -> impl Responder {
    let mut reader = csv::ReaderBuilder::new()
        .has_headers(false)
        .from_path(THREE_WORDLIST_PATH)
        .unwrap();

    HttpResponse::Ok().body(
        reader
            .records()
            .into_iter()
            .map(|result| result.unwrap().get(0).unwrap().to_owned())
            .collect::<Vec<String>>()
            .join("\n"),
    )
}

#[get("/wordle/four")]
async fn get_wordle_four() -> impl Responder {
    let mut reader = csv::ReaderBuilder::new()
        .has_headers(false)
        .from_path(FOUR_WORDLIST_PATH)
        .unwrap();

    HttpResponse::Ok().body(
        reader
            .records()
            .into_iter()
            .map(|result| result.unwrap().get(0).unwrap().to_owned())
            .collect::<Vec<String>>()
            .join("\n"),
    )
}

#[get("/wordle/five")]
async fn get_wordle_five() -> impl Responder {
    let mut reader = csv::ReaderBuilder::new()
        .has_headers(false)
        .from_path(FIVE_WORDLIST_PATH)
        .unwrap();

    HttpResponse::Ok().body(
        reader
            .records()
            .into_iter()
            .map(|result| result.unwrap().get(0).unwrap().to_owned())
            .collect::<Vec<String>>()
            .join("\n"),
    )
}
