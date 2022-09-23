use clap::Parser;
use colored::Colorize;

/// Simple program to greet a person
#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
struct Args {
   /// First value
   #[clap(short, long, value_parser)]
   a: u32,

   /// Second Value
   #[clap(short, long, value_parser)]
   b: u32,
}

fn add(a: u32, b:u32, module: u32) {
  println!("{} {} + {} = {}", format!("a)").green(), a, b, (( a + b ) % module));
}

fn mul(a: u32, b:u32, module:u32) {
  println!("{} {} * {} = {}", format!("b)").green(), a, b, (( a * b ) % module));
}

fn inv(a: u32, module:u32) {
  println!("{} 1/{} = {}", format!("c)").green(), a, (( a.pow(module - 2)) % module));
}

fn main() {
  let args = Args::parse();
  println!("\n{}", format!("Exercise One").bold().blue());
  add(args.a, args.b, 7);
  mul(args.a, args.b, 7);
  inv(args.a, 7);
}
