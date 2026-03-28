import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RelatedTopic {
    title: string;
    path: string;
    description: string;
}

interface RelatedTopicsProps {
    topics: RelatedTopic[];
}

/**
 * RelatedTopics Component
 * Handles spoke-to-spoke cross-linking at the bottom of content pages.
 * Improves dwell time and topical authority.
 */
const RelatedTopics = ({ topics }: RelatedTopicsProps) => {
    return (
        <section className="py-12 border-t border-gray-100 mt-16">
            <h3 className="text-2xl font-bold font-poppins text-brand-black mb-8">Related Pricing Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <Link
                        key={index}
                        to={topic.path}
                        className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-green hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300"
                    >
                        <h4 className="font-bold text-lg text-brand-black group-hover:text-brand-green transition-colors mb-2">
                            {topic.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                            {topic.description}
                        </p>
                        <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                            READ GUIDE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedTopics;
