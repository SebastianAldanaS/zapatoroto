import { JSONContent } from "@tiptap/react";

export interface Color {
    name: string;
    color: string;
    price: number;
}

export interface VariantProduct {
    id: string;
    stock: number;
    price: number;
    color: string;
    color_name: string;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    slug: string;
    description: JSONContent;
    images: string[];
    created_at: string;
    variants: VariantProduct[];
    };

export interface prepareProducts {
    id: string;
    name: string;
    brand: string;
    slug: string;
    description: JSONContent;
    images: string[];
    created_at: string;
    price: number;
    colors: { color: string; color_name: string; }[];
    variants: VariantProduct[];
    };