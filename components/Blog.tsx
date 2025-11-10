
import React from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 transform hover:-translate-y-2">
    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
      <p className="text-slate-600 mb-4">{post.excerpt}</p>
      <a href="#" className="font-semibold text-primary hover:text-primary-dark transition-colors">
        Leer Más &rarr;
      </a>
    </div>
  </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Blog</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mantente informado con nuestras últimas noticias, consejos y proyectos destacados en el mundo de los recubrimientos epóxicos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
