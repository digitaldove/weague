use actix_web::{get, App, HttpResponse, HttpServer, Responder};

mod wordle;

#[get("/")]
async fn base() -> impl Responder {
    HttpResponse::Ok()
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(base)
            .service(wordle::get_wordle)
            .service(wordle::get_wordle_three)
            .service(wordle::get_wordle_four)
            .service(wordle::get_wordle_five)
            .service(wordle::post_wordle)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
