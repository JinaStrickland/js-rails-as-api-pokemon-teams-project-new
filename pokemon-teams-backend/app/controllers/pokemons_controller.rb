require "faker"

class PokemonsController < ApplicationController

    def index 
        pokemons = Pokemon.all
        render json: pokemons
    end


    def create 
       trainer = params[:trainer_id]
       pokemon = Pokemon.create(trainer_id: trainer, species: Faker::Name.first_name, nickname: Faker::Games::Pokemon.name)
      
       render json: pokemon
    end

    # name = Faker::Name.first_name
    # species = Faker::Games::Pokemon.name
    
end
