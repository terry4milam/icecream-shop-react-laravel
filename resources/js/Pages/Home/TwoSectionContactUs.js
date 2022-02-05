import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import TwoSection from "@/Components/TwoSection";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSectionContactUs = () => {
    return (
        <TwoSection img="/img/home/img-4.jpg" reverse={true}>
            <div className="text-center">
                <p className="mb-1  font-sacramento text-5xl text-gray-400">
                    Contáctenos
                </p>
                <h3 className="title mb-7 w-full  text-4xl">DI HOLA</h3>
                <p className="mb-7 font-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eius- mod tempor incididunt ut labore et dolore.
                </p>
                <div className="mb-10 px-8">
                    <form action="" className="space-y-3">
                        <Input
                            required={true}
                            name="name"
                            placeholder="Nombre"
                        />
                        <Input
                            required={true}
                            name="email"
                            placeholder="Email"
                        />
                        <Textarea
                            required={true}
                            name="name"
                            placeholder="Mensaje"
                        />
                    </form>
                </div>

                <div className="">
                    <Link href="#" className="btn btn-md">
                        Enviar mensaje
                    </Link>
                </div>
            </div>
        </TwoSection>
    );
};

export default TwoSectionContactUs;